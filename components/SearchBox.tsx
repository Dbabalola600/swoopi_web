
import { ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";



type buttonProp = {
    onPress?: any

}
export default function SearchBox(props: buttonProp) {
    const [searchText, setSearchText] = useState('');

    const handlePress = () => {
        // Access the searchText value here
        if (props.onPress) {
            props.onPress(searchText);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    return (
        <div className="flex justify-center">
            <div className="mb- mt-3 w-full">
                <div
                    className="relative mb-4 flex w-full flex-wrap items-stretc m-0 -mr-px min-w-0 flex-auto rounded-xl   border-2 bg-transparent bg-clip-padding px-4 py-5 font-normal  outline-none transition duration-300 ease-in-out   focus:outline-none  "
                >

                    <div
                        className="text-black  my-auto"
                        onClick={handlePress}
                    >
                        <FaSearch />
                    </div>
                    <input
                        type="search"
                        className="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l  bg-transparent bg-clip-padding  px-4 font-normal text-neutral-700 outline-none transition duration-300 ease-in-out  focus:text-neutral-700 focus:shadow-te-primary focus:outline-none  dark:text-gray-500 dark:placeholder:text-gray-500"
                        placeholder="Search top vendors"
                        aria-label="Search"
                        aria-describedby="button-addon3"
                        value={searchText}
                        onChange={handleChange}
                    />



                </div>
            </div>
        </div>
    )
}