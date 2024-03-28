export const wait = async (timeInMs: number): Promise<void> => {
    return await new Promise((resolve) =>
        setTimeout(() => resolve(), timeInMs),
    );
};
