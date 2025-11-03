export default function About() {
return (
<section style={{display:'grid',gap:8}}>
<h1 style={{fontSize:22,fontWeight:700}}>About</h1>
<p>Cette page est chargée en lazy via <code>React.lazy</code>
+ <code>&lt;Suspense&gt;</code>.</p>
</section>
)
}