export const extractFormData = form => Array
    .from(form.elements)
    .reduce((acc, { id, value }) => ({ [id]: value, ...acc }), {});

export const getCurrencySymbol = country => {
    const currencies = {
        gb: '£',
        in: '$',
        us: '$',
    };
    return currencies[country];
}