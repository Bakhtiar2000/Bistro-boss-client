import { useQuery } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const { user } = useAuth()
    // const token= localStorage.getItem('access-token')
    const [axiosSecure] = useAxiosSecure()
    // console.log(user)
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async () => {
                const res = await axiosSecure(`/carts?email=${user?.email}`)
                // console.log('response from axios', res)
                return res.data
            
        }
    })
    return [cart, refetch]
};

export default useCart;