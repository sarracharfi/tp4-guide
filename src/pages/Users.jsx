import { Link } from 'react-router-dom'
const FAKE = [
{ id: '1', name: 'Alice', email: 'alice@example.com' },
{ id: '2', name: 'Bob', email: 'bob@example.com' },
{ id: '3', name: 'Charlie', email: 'charlie@example.com' },
]
export default function Users() {
return (
<section style={{display:'grid',gap:12}}>
<h1 style={{fontSize:22,fontWeight:700}}>Users</h1>
<ul style={{display:'grid',gap:8}}>
{FAKE.map(u => (
<li key={u.id}>
<Link to={`/users/${u.id}`}
style={{textDecoration:'underline'}}>
{u.name}
</Link>
<div style={{fontSize:12,opacity:.6}}>{u.email}</div>
</li>
))}
</ul>
</section>
)
}
 