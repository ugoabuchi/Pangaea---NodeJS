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
const publish_dao_1 = __importDefault(require("../dao/publish.dao"));
class PublishService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return publish_dao_1.default.publishContent(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return publish_dao_1.default.removePublishedContentById(id);
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return publish_dao_1.default.getPublishedContents();
        });
    }
    readByIdAll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return publish_dao_1.default.getSubPublishContentByIdAll(id);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return publish_dao_1.default.getPublishedContentById(id);
        });
    }
}
exports.default = new PublishService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGlzaC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvcHVibGlzaC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUVBQTRDO0FBSTVDLE1BQU0sY0FBYztJQUdWLE1BQU0sQ0FBQyxRQUEwQjs7WUFFbkMsT0FBTyxxQkFBVSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QyxDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsRUFBVTs7WUFDdkIsT0FBTyxxQkFBVSxDQUFDLDBCQUEwQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELENBQUM7S0FBQTtJQUdLLE9BQU87O1lBQ1QsT0FBTyxxQkFBVSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBR0ssV0FBVyxDQUFDLEVBQVU7O1lBQ3hCLE9BQU8scUJBQVUsQ0FBQywyQkFBMkIsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN0RCxDQUFDO0tBQUE7SUFFSyxRQUFRLENBQUMsRUFBVTs7WUFDckIsT0FBTyxxQkFBVSxDQUFDLHVCQUF1QixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xELENBQUM7S0FBQTtDQUdKO0FBRUQsa0JBQWdCLElBQUksY0FBYyxFQUFFLENBQUMifQ==