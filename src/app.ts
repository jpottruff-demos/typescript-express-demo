import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    const sum = add(5,6);
    res.send(`Oh hey there bud. Guess what - the sum of 5 + 6 = ${sum}`);
});

app.listen(5000, () => console.log('Server running'));