import { useParams } from 'react-router-dom'
const FAKE = [
{ id: '1', name: 'Alice', email: 'alice@example.com' },
{ id: '2', name: 'Bob', email: 'bob@example.com' },
{ id: '3', name: 'Charlie', email: 'charlie@example.com' },
]
export default function UserDetail() {
const { id } = useParams()
const user = FAKE.find(u => u.id === id)
if (!user) {
return <div style={{padding:16}}>User not found.</div>
}
return (
<article style={{display:'grid',gap:8}}>
<h2 style={{fontSize:20,fontWeight:700}}>{user.name}</h2>
<p style={{opacity:.7}}>{user.email}</p>
<p style={{fontSize:12,opacity:.6}}>
Exemple de <strong>Route Params</strong> — <code>:id</code>
= <code>{id}</code>
</p>
</article>
)
}
