export const handleDisabledStatusFormSubmit = (
    firstObj,
    secondObj,
    type,
    optionalParams
) => {
    const removeProperties = (obj, propertiesToRemove) => {
        const newObj = {};
        for (const key in obj) {
            if (!propertiesToRemove.includes(key)) {
                newObj[key] = obj[key];
            }
        }
        return newObj;
    };

    let result = false;

    if (type === "Edit") {
        if (JSON.stringify(firstObj) === JSON.stringify(secondObj)) {
            result = true;
        } else {
            result = false;
        }
    } else {
        const addObj = removeProperties(firstObj, optionalParams);
        let booleanChecks = [];
        Object.keys(addObj)?.forEach((key) => {
            if (firstObj[key].length > 0) {
                booleanChecks.push(false);
            } else {
                booleanChecks.push(true);
            }
        });

        const falsyValues = booleanChecks.filter((item) => item === false);

        if (falsyValues.length === booleanChecks.length) {
            result = false;
        } else {
            result = true;
        }
    }

    return result;
};
