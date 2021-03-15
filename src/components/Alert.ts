import { ReactNotificationOptions, store } from 'react-notifications-component'

const defaultOption: ReactNotificationOptions = {
    insert: 'top',
    container: 'top-right',
    animationIn: ['animate__animated', 'animate__fadeIn'],
    animationOut: ['animate__animated', 'animate__fadeOut'],
    width: 250,
    dismiss: {
        duration: 3000,
        onScreen: true,
        showIcon: true,
        click: true,
    },
}

function success(message: string) {
    const options: ReactNotificationOptions = {
        ...defaultOption,
        message,
        type: 'success',
    }
    store.addNotification(options)
}

function warning(message: string) {
    const options: ReactNotificationOptions = {
        ...defaultOption,
        message,
        type: 'warning',
    }
    store.addNotification(options)
}

function info(message: string) {
    const options: ReactNotificationOptions = {
        ...defaultOption,
        message,
        type: 'info',
    }
    store.addNotification(options)
}

function error(message: string) {
    const options: ReactNotificationOptions = {
        ...defaultOption,
        message,
        type: 'danger',
    }
    store.addNotification(options)
}

export const Alert = {
    success,
    info,
    error,
    warning,
}
