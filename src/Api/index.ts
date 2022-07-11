import Axios  from 'axios';

export default class {
    static post(uri: string, data: any) {
        return this.http().post(this.setUri(uri), data);
    }

    static put(uri: string, data: any, type?: string) {
        return this.http(type).patch(this.setUri(uri), data);
    }

    static get(uri: string, type?: string) {
        return this.http(type).get(this.setUri(uri));
    }

    static patch(uri: string, data: any, type?: string) {
        return this.http(type).patch(this.setUri(uri), data);
    }

    static delete(uri: string, type?: string) {
        return this.http(type).delete(this.setUri(uri));
    }

    static http(type?: string) {
        return Axios.create({
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_APP_BEARER_TOKEN}`,
                Accept: 'application/json',
                id: import.meta.env.VITE_APP_USER,
                type: type ? type : 'user'
            },
        });
    }

    static setUri(uri: string) {
        return import.meta.env.VITE_APP_BASE_URL + uri;
    }
}
