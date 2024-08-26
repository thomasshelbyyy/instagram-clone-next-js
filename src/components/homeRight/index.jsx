import CurrentAccount from "../currentAccount"
import HomeSuggestedAccount from "../homeSuggestedAccount"
import { brookeCagle, ejAgumbay, fxRijkard, joshuaRawson } from "../../assets/profile/images"

const HomeRight = () => {
    return (
        <div className="w-[250px] hidden lg:flex flex-col pt-12">
            <CurrentAccount />
            <div className="flex justify-between pt-3 pb-2">
                <span className="text-gray-500 text-sm font-semibold">Suggested for you</span>
                <button className="text-xs font-semibold">See all</button>
            </div>

            <HomeSuggestedAccount image={brookeCagle} username="brookeCagle" />
            <HomeSuggestedAccount image={ejAgumbay} username="ejAgumbay" />
            <HomeSuggestedAccount image={fxRijkard} username="fxRijkard" />
            <HomeSuggestedAccount image={joshuaRawson} username="joshuaRawson" />
        </div>
    )
}

export default HomeRight