import {Summary} from "../components/Summary";
import {FoodTable} from "../components/FoodTable";
import Food from "../Api/Food";
import {useEffect, useState} from "react";
import {FoodDto} from "../utilities/interfaces/food.interface";
import {toast, ToastContainer} from "react-toastify";
import {Preloader} from "../components/Preloader";
import 'react-toastify/dist/ReactToastify.min.css';
import {AddFood} from "../components/AddFood";

export function Home() {
    const [foods, setFoods] = useState<FoodDto[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const getFoods = async () => {
        setIsLoading(true);
        const {data, errors} = await Food.getFoodsByUserId();
        if (errors) {
            setTimeout(() => {
                toast.error(errors.data.message, {
                    position: 'top-right'
                });
            });
            setIsLoading(false);
            return;
        }
        setFoods(data);
        setIsLoading(false);
    };

    useEffect(() => {
        getFoods();
    }, []);
    const summaryData = [1, 2, 3, 4, 5, 6];
    return(
        <div>
            <ToastContainer />
            {isLoading && <Preloader /> }
            { !isLoading && foods.length &&
                <div>
                    <AddFood />
                    <div className="d-flex justify-content-between mt-3 mb-5" style={{overflowX: 'scroll'}}>
                        {summaryData.map((summary) => (
                            <Summary key={summary} />
                        ))}
                    </div>
                    <div>
                        <h4 className="mb-3">Foods</h4>
                        <FoodTable foods={foods} />
                    </div>
                </div>
            }
        </div>
    );
}
