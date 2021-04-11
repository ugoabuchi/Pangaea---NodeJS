import express from 'express';
import * as http from 'http';

import * as winston from 'winston';
import * as expressWinston from 'express-winston';
import cors from 'cors';
import {CommonRoutesConfig} from './common/common.routes.config';
import {PublishRoutes} from './publish/publish.routes.config';
import {SubscribeRoutes} from './subscribe/subscribe.routes.config';
import debug from 'debug';

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const port = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug('app');

app.use(express.json());

app.use(cors());

const loggerOptions: expressWinston.LoggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(
        winston.format.json(),
        winston.format.prettyPrint(),
        winston.format.colorize({ all: true })
    ),
};

if (process.env.DEBUG) {
    process.on('unhandledRejection', function(reason) {
        debugLog('Unhandled Rejection:', reason);
        process.exit(1);
    });
} else {
    loggerOptions.meta = false;
}

app.use(expressWinston.logger(loggerOptions));
routes.push(new PublishRoutes(app));
routes.push(new SubscribeRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send('Server up and running!')
});

server.listen(port, () => {
    debugLog(`Server running at http://localhost:${port}`);
    routes.forEach((route: CommonRoutesConfig) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
});