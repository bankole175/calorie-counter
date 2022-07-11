import {Table} from "react-bootstrap";
import {FoodDto} from "../utilities/interfaces/food.interface";
import {FiEdit2, FiTrash2} from "react-icons/all";
import {formatCurrency} from "../utilities/formatCurrency";

type Props = {
    foods: FoodDto[]
}

export function FoodTable({foods}: Props) {
    return(
        <div>
            <Table bordered hover>
                <thead style={styles.header}>
                <tr>
                    <th>Food</th>
                    <th>Calorie</th>
                    <th>Price</th>
                    <th>Date</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                    {
                        foods.map((food) =>
                            <tr key={food.id} id={food.id}>
                                <td>{food.name}</td>
                                <td>{food.calorie}</td>
                                <td>{formatCurrency(food.price)}</td>
                                <td>{food.dateTime}</td>
                                <td>
                                    <div className="d-flex">
                                        <div className="cursor">
                                            <FiEdit2 size={20} color={'#0d60d8'}/>
                                        </div>
                                        <div className="ms-4 cursor">
                                            <FiTrash2 size={20} color={'#0d60d8'} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
}

const styles = {
    header: {
        color: '#8D909E',
        textTransform: 'uppercase',
        fontWeight: 400,
        paddingLeft: '5px',
        paddingRight: 0,
        background: '#f5f6f8',
        border: 'none',
        borderColor: '#f5f6f8'
    }
} as const
