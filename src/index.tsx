import ReactDOM from 'react-dom/client'
import 'uno.css'
import FeQuestion from '~icons/fe/question'
import * as T from '@radix-ui/react-tooltip';
import ArrowRight from '~icons/heroicons/arrow-long-right-20-solid'


const Tooltip = ({ children, content }: { children: React.ReactNode, content: React.ReactNode }) => (
    <T.Root>
      <T.Trigger asChild className='flex'>
        <div>{children}</div>
      </T.Trigger>
      <T.Portal>
        <T.Content>
          <div className="bg-zinc-800 px-2 py-1 rounded-sm max-w-30ch">
            {content}
          </div>
          <T.Arrow />
        </T.Content>
      </T.Portal>
    </T.Root>
)



interface Data {
  title: string
  groups: Group[],
  description?: string
}

interface Details {
  title: string
}

interface Group {
  title: string
  elements: Element[]
}

interface Element {
  title: string
  type: string
}

const data: Data[] = [
  {
    title: "Bounded",
    description: "A type class used to name the lower limit and the upper limit of a type.",
    groups: [
      {
        title: "Members",
        elements: [
          { title: "minBound", type: "number" },
          { title: "maxBound", type: "number" }
        ]
      },
      {
        title: "Utils",
        elements: [
          { title: "reverse", type: "Bounded a -> Bounded a" },
          { title: "clamp", type: "Bounded a -> a -> a" },
        ]
      }
    ]
  },
  {
    title: "Equivalence",
    description: "Equivalence defines a binary relation that is reflexive, symmetric, and transitive. In other words, it defines a notion of equivalence between values of a certain type. These properties are also known in mathematics as an equivalence relation",
    groups: [
      {
        title: "Constructors",
        elements: [
          { title: "array", type: "Equivalence a -> Equivalence a[]" },
        ]
      }
    ]
  },
  {
    title: "Either",
    description: "Description",
    groups: [
      {
        title: "Constructors",
        elements: [
          { title: "left", type: "a -> Either a b" },
          { title: "right", type: "b -> Either a b" }
        ]
      },
      {
        title: "Predicates",
        elements: [
          { title: "isLeft", type: "Either a b -> boolean" },
          { title: "isRight", type: "Either a b -> boolean" }
        ]
      },
    ]
  },
  {
    title: "Option",
    groups: [
      {
        title: "Constructors",
        elements: [
          { title: "some", type: "a -> Option a" },
          { title: "none", type: "() -> Option a" }
        ]
      },
      {
        title: "Predicates",
        elements: [
          { title: "isSome", type: "Option a -> boolean" },
          { title: "isNone", type: "Option a -> boolean" }
        ]
      },
    ]
  },
  {
    title: "These",
    groups: [
      {
        title: "Constructors",
        elements: [
          { title: "left", type: "a -> These a b" },
          { title: "right", type: "b -> These a b" },
          { title: "both", type: "a -> b -> These a b" }
        ]
      },
      {
        title: "Predicates",
        elements: [
          { title: "isLeft", type: "These a b -> boolean" },
          { title: "isRight", type: "These a b -> boolean" },
          { title: "isBoth", type: "These a b -> boolean" }
        ]
      },
    ]
  }
]

const Card = ({ data }: { data: Data }) => (
  <div className="h-min bg-zinc-800 grow rounded w-85 max-w-full overflow-hidden">
    <div className="p-3">
      <T.Provider>
        <div className="flex gap-1 items-center font-bold bg-zinc-700 rounded p-2">
          {data.title}
          {data.description &&
            <Tooltip content={data.description}>
              <FeQuestion className="text-sm text-zinc-400" />
            </Tooltip>
          }
        </div>
      </T.Provider>
    </div>
    <div>
      {data.groups.map((group) => (
        <div>
          <div className='px-3 py-1 text-zinc-400'>
            {group.title}
          </div>
          {group.elements.map((element) => (
            <div className="flex justify-between items-center group gap-4 px-3 py-2 hover:bg-zinc-600">
              {element.title}
              <div className='opacity-0 group-hover:opacity-100 text-zinc-500'>
                {element.type}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <div className="font-sans p-2rem gap-4 flex flex-wrap">
    { data.map((d, i) => <Card key={i} data={d} / > )}
  </div>
)
