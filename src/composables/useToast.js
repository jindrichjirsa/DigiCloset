import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const useToast = () => {

    const defaultOptions = {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    };

    const success = (message, options = {}) => {
        toast.success(message, { ...defaultOptions, ...options });
    };

    const error = (message, options = {}) => {
        toast.error(message, { ...defaultOptions, ...options });
    };

    const info = (message, options = {}) => {
        toast.info(message, { ...defaultOptions, ...options });
    };

    const warning = (message, options = {}) => {
        toast.warn(message, { ...defaultOptions, ...options });
    };

    return {
        success,
        error,
        info,
        warning,
        toastInstance: toast
    };
};