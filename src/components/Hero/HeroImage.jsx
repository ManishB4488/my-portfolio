import profile from "../../assets/images/profile.jpg";

function HeroImage(){

    return(

        <div className="flex justify-center">

            <img
            src={profile}
            className="w-96 h-96 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
            />

        </div>

    )

}

export default HeroImage;