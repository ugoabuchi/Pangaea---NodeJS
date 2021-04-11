"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const publish_service_1 = __importDefault(require("../services/publish.service"));
const debug_1 = __importDefault(require("debug"));
const log = debug_1.default('app:users-controller');
class PublishController {
    listPublishedContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publishContents = yield publish_service_1.default.readAll();
            res.status(200).send(publishContents);
        });
    }
    listPublishedContentById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publishContents = yield publish_service_1.default.readByIdAll(req.body.topic);
            res.status(200).send(publishContents);
        });
    }
    getById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publishContents = yield publish_service_1.default.readById(req.body.topic);
            res.status(200).send(publishContents);
        });
    }
    publishNewContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const publishContents = yield publish_service_1.default.create(req.body);
            res.status(201).send(publishContents);
        });
    }
    removePublishedContent(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const status = yield publish_service_1.default.deleteById(req.body.id);
            res.status(204).send(status);
        });
    }
}
exports.default = new PublishController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvcHVibGlzaC5jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRUEsa0ZBQXlEO0FBRXpELGtEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDM0QsTUFBTSxpQkFBaUI7SUFFYixvQkFBb0IsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNsRSxNQUFNLGVBQWUsR0FBRyxNQUFNLHlCQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDdkQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRUssd0JBQXdCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDdEUsTUFBTSxlQUFlLEdBQUcsTUFBTSx5QkFBYyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pFLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzFDLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNyRCxNQUFNLGVBQWUsR0FBRyxNQUFNLHlCQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdEUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDL0QsTUFBTSxlQUFlLEdBQUcsTUFBTSx5QkFBYyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFOUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDMUMsQ0FBQztLQUFBO0lBRUssc0JBQXNCLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDcEUsTUFBTSxNQUFNLEdBQUcsTUFBTSx5QkFBYyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxpQkFBaUIsRUFBRSxDQUFDIn0=