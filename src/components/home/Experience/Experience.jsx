import timeline from "../../../data/timeline";
import Container from "../../common/Container";
import SectionTitle from "../../common/SectionTitle";
import TimelineCard from "./TimelineCard";

function Experience(){

return(

<section className="py-28">

<Container>

<SectionTitle

subtitle="MY JOURNEY"

title="Experience & Education"

/>

<div className="relative">

<div className="absolute left-5 top-0 bottom-0 w-1 bg-cyan-500"/>

<div className="space-y-12">

{timeline.map(item=>(

<div
key={item.id}
className="relative pl-16"
>

<div className="absolute left-2 top-8 w-6 h-6 rounded-full bg-cyan-400 border-4 border-black"/>

<TimelineCard item={item}/>

</div>

))}

</div>

</div>

</Container>

</section>

)

}

export default Experience;