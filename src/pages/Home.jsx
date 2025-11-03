import { Link } from 'react-router-dom'
export default function Home() {
return (
<section style={{display:'grid',gap:12}}>
<h1 style={{fontSize:24,fontWeight:700}}>Home</h1>
<p>Parcours de démo :</p>
<ul>
<li><Link to="/users">Users</Link></li>
<li><Link to="/users/2">User detail (id=2)</Link></li>
<li><Link to="/search?q=react&sort=asc">Search avec query
params</Link></li>
<li><Link to="/about">About (lazy)</Link></li>
</ul>
</section>
)
}
