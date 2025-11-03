import { useSearchParams } from 'react-router-dom'

export default function Search() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') || ''
  const sort = params.get('sort') || 'asc'

  return (
    <section style={{ display: 'grid', gap: 12 }}>
      <h1 style={{ fontSize: 22, fontWeight: 700 }}>Search (Query Params)</h1>

      <form
        onSubmit={(e) => e.preventDefault()}
        style={{ display: 'flex', gap: 8, alignItems: 'center' }}
      >
        <input
          defaultValue={q}
          placeholder="q"
          onChange={(e) =>
            setParams((p) => {
              p.set('q', e.target.value)
              return p
            })
          }
          style={{
            padding: '8px 10px',
            border: '1px solid #ddd',
            borderRadius: 8,
          }}
        />

        <select
          defaultValue={sort}
          onChange={(e) =>
            setParams((p) => {
              p.set('sort', e.target.value)
              return p
            })
          }
          style={{
            padding: '8px 10px',
            border: '1px solid #ddd',
            borderRadius: 8,
          }}
        >
          <option value="asc">asc</option>
          <option value="desc">desc</option>
        </select>
      </form>

      <div style={{ fontSize: 14, opacity: 0.7 }}>
        q = <code>{q}</code> | sort = <code>{sort}</code>
      </div>
    </section>
  )
}
