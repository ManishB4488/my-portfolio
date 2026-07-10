import { motion } from "framer-motion";

function TimelineCard({ item }) {

return(

<motion.div

initial={{opacity:0,x:-50}}

whileInView={{opacity:1,x:0}}

viewport={{once:true}}

transition={{duration:.6}}

className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-cyan-500 transition"

>

<div className="text-cyan-400 text-xl font-bold">

{item.year}

</div>

<h3 className="text-2xl font-bold mt-3">

{item.title}

</h3>

<p className="text-cyan-300">

{item.subtitle}

</p>

<p className="text-zinc-400 mt-4 leading-7">

{item.description}

</p>

</motion.div>

)

}

export default TimelineCard;