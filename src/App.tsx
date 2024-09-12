import { useQuery } from '@tanstack/react-query'
import { CreateGoal } from './components/create-goal'
import { EmptyGoals } from './components/empty-goals'
import { Summary } from './components/summary'
import { Dialog } from './components/ui/dialog'
import { getSummary } from './http/get-summary'

export function App() {
  // const [summary, setSummary] = useState<SummaryResponse | null>()

  // useEffect(() => {
  //   fetch('http://localhost:3333/summary')
  //     .then(response => response.json())
  //     .then(data => setSummary(data.summary))
  // }, [])

  // console.log(summary)

  const { data } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60, // 60 seconds
  })
  return (
    <Dialog>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Dialog>
  )
}

export default App
