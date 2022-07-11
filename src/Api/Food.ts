import API from './index'
import {FoodDto} from "../utilities/interfaces/food.interface";
import {AxiosError} from "axios";

export default class extends API {
    static async createFood(payload: FoodDto) {
        try {
            const { data } = await this.post('food', payload);
            return data;
        } catch (e: any) {
            return { errors: e.response };
        }
    }

    static async getFoods() {
        try {
            const { data } = await this.get('food');
            return data;
        } catch (e: any) {
            return { errors: e.response };
        }
    }

    static async getFoodsByUserId() {
        try {
            const { data } = await this.get('food/me');
            return data;
        } catch (e) {
            const err = e as AxiosError
            return { errors: err.response };
        }
    }

    static async editFood(foodId: string, payload: FoodDto) {
        try {
            const { data } = await this.patch(`food/${foodId}`, payload);
            return data;
        } catch (e: any) {
            return { errors: e.response };
        }
    }

    static async deleteFood(foodId: string) {
        try {
            const { data } = await this.delete(`food/${foodId}`);
            return data;
        } catch (e: any) {
            return { errors: e.response };
        }
    }
}
