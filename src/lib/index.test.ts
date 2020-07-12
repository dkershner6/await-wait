import wait from '.';

describe('wait', () => {
    beforeAll(() => {
        jest.useFakeTimers();
    });

    afterAll(() => {
        jest.useRealTimers();
    });

    it('Should wait the number of milliseconds before allowing further async calls', async () => {
        const testFunc = jest.fn();

        const asyncTest = async () => {
            await wait(15000);
            testFunc();
        };

        const promise = asyncTest();

        expect(jest.getTimerCount()).toEqual(1);
        expect(testFunc).not.toHaveBeenCalled();

        jest.runOnlyPendingTimers();
        await promise;

        expect(testFunc).toHaveBeenCalled();
        expect(jest.getTimerCount()).toEqual(0);
    });
});
