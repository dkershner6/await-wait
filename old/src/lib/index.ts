const wait = async (timeInMs: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(() => resolve(), timeInMs));
};

export default wait;
