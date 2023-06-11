import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://bistro-boss-server-fawn.vercel.app',
});

const useAxiosSecure = () => {
    return (
        <div>

        </div>
    );
};

export default useAxiosSecure;