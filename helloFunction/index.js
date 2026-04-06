module.exports = async function (context, req) {
    context.log('Azure Function executada');

    context.res = {
        status: 200,
        body: {
            msg: "Hello from Azure Function 🚀"
        }
    };
};