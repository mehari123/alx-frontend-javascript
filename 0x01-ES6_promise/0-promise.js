export default function getResponseFromAPI() {
    const success = true;
    return new Promise((resolve, reject) => {
        if (success) {
            resolve(success);
        } else {
            reject();
        }
    });
}