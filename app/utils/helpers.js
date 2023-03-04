export const formatDate = date => {
    const newDate = new Date(date);

    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }

    return newDate.toLocaleDateString('es-HN', options)
}

export const generateId = () =>
    Math.random().toString(36).substr(2) + Date.now().toString(36);