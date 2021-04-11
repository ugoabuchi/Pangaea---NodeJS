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
const subscribe_dao_1 = __importDefault(require("../dao/subscribe.dao"));
class SubscriptionsService {
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return subscribe_dao_1.default.addSubscription(resource);
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return subscribe_dao_1.default.removeSubscriptionById(id);
        });
    }
    readAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return subscribe_dao_1.default.getSubscriptions();
        });
    }
    readByIdAll(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return subscribe_dao_1.default.getSubscriptionByIdAll(id);
        });
    }
    readById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return subscribe_dao_1.default.getSubscriptionById(id);
        });
    }
    readByIdAndUrl(id, url) {
        return __awaiter(this, void 0, void 0, function* () {
            return subscribe_dao_1.default.getTopicWhereUrlexist(id, url);
        });
    }
}
exports.default = new SubscriptionsService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3Vic2NyaXB0aW9ucy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvc3Vic2NyaXB0aW9ucy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUVBQW9EO0FBSXBELE1BQU0sb0JBQW9CO0lBR2hCLE1BQU0sQ0FBQyxRQUErQjs7WUFFeEMsT0FBTyx1QkFBZ0IsQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckQsQ0FBQztLQUFBO0lBRUssVUFBVSxDQUFDLEVBQVU7O1lBQ3ZCLE9BQU8sdUJBQWdCLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBR0ssT0FBTzs7WUFDVCxPQUFPLHVCQUFnQixDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDL0MsQ0FBQztLQUFBO0lBR0ssV0FBVyxDQUFDLEVBQVU7O1lBQ3hCLE9BQU8sdUJBQWdCLENBQUMsc0JBQXNCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDdkQsQ0FBQztLQUFBO0lBRUssUUFBUSxDQUFDLEVBQVU7O1lBQ3JCLE9BQU8sdUJBQWdCLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRUssY0FBYyxDQUFDLEVBQVUsRUFBRSxHQUFXOztZQUN4QyxPQUFPLHVCQUFnQixDQUFDLHFCQUFxQixDQUFDLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMzRCxDQUFDO0tBQUE7Q0FFSjtBQUVELGtCQUFnQixJQUFJLG9CQUFvQixFQUFFLENBQUMifQ==