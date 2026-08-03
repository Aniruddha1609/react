export function Card({ imageURL, name }) {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
                    <div>
                        <img
                            src={imageURL}
                            alt="test"
                            className="object-cover object-center rounded-t-xl"
                        />
                    </div>
                    <div className="flex flex-col py-3 px-3 pb-10  text-white">
                        <div className="flex justify-between ">
                            <h1 className="font-bold ">
                                {name}
                            </h1>
                            <h1>Price</h1>
                        </div>
                        <div>
                            <p>#345</p>
                            <p>0.01</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
