import {
  Component,
  Directive,
  Injectable,
  Input,
  NgModule,
  TemplateRef,
  setClassMetadata,
  signal,
  ɵɵStandaloneFeature,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵprojection,
  ɵɵprojectionDef
} from "./chunk-EB3H2QMK.js";
import {
  Subject
} from "./chunk-GM2YTKEO.js";
import {
  __spreadValues
} from "./chunk-H2SRQSE4.js";

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return typeof value === "object" && !Array.isArray(value) && value != null && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field) return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2) return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length) return false;
        for (i = length; i-- !== 0; ) if (!this.equalsByValue(obj1[i], obj2[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB) return false;
      if (dateA && dateB) return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length) return false;
      for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key])) return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val)) return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input) {
    return Object.prototype.toString.call(input) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2) result = 0;
    else if (emptyValue1) result = order;
    else if (emptyValue2) result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, locale, {
      numeric: true
    });
    else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a, b) {
    if (a === b) return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length) return false;
        for (i = length; i-- !== 0; ) if (!this.deepEquals(a[i], b[i])) return false;
        return true;
      }
      if (arrA != arrB) return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length) return false;
      for (i = length; i-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key])) return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : {
      key,
      value: baseZIndex
    };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({
      key,
      value: newZIndex
    });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex()
  };
}
var zindexutils = ZIndexUtils();

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static ɵfac = function ConfirmationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static ɵfac = function ContextMenuService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContextMenuService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterOperator = class {
  static AND = "and";
  static OR = "or";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() === filter.getTime();
      else if (value == filter) return true;
      else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime) return value.getTime() !== filter.getTime();
      else if (value == filter) return false;
      else return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (ObjectUtils.equals(value, filter[i])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime) return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() < filter.getTime();
      else return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() <= filter.getTime();
      else return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() > filter.getTime();
      else return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime) return value.getTime() >= filter.getTime();
      else return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      const valueCopy = new Date(value);
      valueCopy.setHours(0, 0, 0, 0);
      return valueCopy.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static ɵfac = function FilterService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FilterService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FilterService,
    factory: _FilterService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {Message} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Inserts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static ɵfac = function MessageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MessageService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MessageService,
    factory: _MessageService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  static ɵfac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _OverlayService,
    factory: _OverlayService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PrimeIcons = class {
  static ADDRESS_BOOK = "pi pi-address-book";
  static ALIGN_CENTER = "pi pi-align-center";
  static ALIGN_JUSTIFY = "pi pi-align-justify";
  static ALIGN_LEFT = "pi pi-align-left";
  static ALIGN_RIGHT = "pi pi-align-right";
  static AMAZON = "pi pi-amazon";
  static ANDROID = "pi pi-android";
  static ANGLE_DOUBLE_DOWN = "pi pi-angle-double-down";
  static ANGLE_DOUBLE_LEFT = "pi pi-angle-double-left";
  static ANGLE_DOUBLE_RIGHT = "pi pi-angle-double-right";
  static ANGLE_DOUBLE_UP = "pi pi-angle-double-up";
  static ANGLE_DOWN = "pi pi-angle-down";
  static ANGLE_LEFT = "pi pi-angle-left";
  static ANGLE_RIGHT = "pi pi-angle-right";
  static ANGLE_UP = "pi pi-angle-up";
  static APPLE = "pi pi-apple";
  static ARROWS_ALT = "pi pi-arrows-alt";
  static ARROW_CIRCLE_DOWN = "pi pi-arrow-circle-down";
  static ARROW_CIRCLE_LEFT = "pi pi-arrow-circle-left";
  static ARROW_CIRCLE_RIGHT = "pi pi-arrow-circle-right";
  static ARROW_CIRCLE_UP = "pi pi-arrow-circle-up";
  static ARROW_DOWN = "pi pi-arrow-down";
  static ARROW_DOWN_LEFT = "pi pi-arrow-down-left";
  static ARROW_DOWN_LEFT_AND_ARROW_UP_RIGHT_TO_CENTER = "pi pi-arrow-down-left-and-arrow-up-right-to-center";
  static ARROW_DOWN_RIGHT = "pi pi-arrow-down-right";
  static ARROW_LEFT = "pi pi-arrow-left";
  static ARROW_RIGHT_ARROW_LEFT = "pi pi-arrow-right-arrow-left";
  static ARROW_RIGHT = "pi pi-arrow-right";
  static ARROW_UP = "pi pi-arrow-up";
  static ARROW_UP_LEFT = "pi pi-arrow-up-left";
  static ARROW_UP_RIGHT = "pi pi-arrow-up-right";
  static ARROW_UP_RIGHT_AND_ARROW_DOWN_LEFT_FROM_CENTER = "pi pi-arrow-up-right-and-arrow-down-left-from-center";
  static ARROW_H = "pi pi-arrows-h";
  static ARROW_V = "pi pi-arrows-v";
  static ASTERIKS = "pi pi-asteriks";
  static AT = "pi pi-at";
  static BACKWARD = "pi pi-backward";
  static BAN = "pi pi-ban";
  static BARCODE = "pi pi-barcode";
  static BARS = "pi pi-bars";
  static BELL = "pi pi-bell";
  static BELL_SLASH = "pi pi-bell-slash";
  static BITCOIN = "pi pi-bitcoin";
  static BOLT = "pi pi-bolt";
  static BOOK = "pi pi-book";
  static BOOKMARK = "pi pi-bookmark";
  static BOOKMARK_FILL = "pi pi-bookmark-fill";
  static BOX = "pi pi-box";
  static BRIEFCASE = "pi pi-briefcase";
  static BUILDING = "pi pi-building";
  static BUILDING_COLUMNS = "pi pi-building-columns";
  static BULLSEYE = "pi pi-bullseye";
  static CALCULATOR = "pi pi-calculator";
  static CALENDAR = "pi pi-calendar";
  static CALENDAR_CLOCK = "pi pi-calendar-clock";
  static CALENDAR_MINUS = "pi pi-calendar-minus";
  static CALENDAR_PLUS = "pi pi-calendar-plus";
  static CALENDAR_TIMES = "pi pi-calendar-times";
  static CAMERA = "pi pi-camera";
  static CAR = "pi pi-car";
  static CARET_DOWN = "pi pi-caret-down";
  static CARET_LEFT = "pi pi-caret-left";
  static CARET_RIGHT = "pi pi-caret-right";
  static CARET_UP = "pi pi-caret-up";
  static CART_ARROW_DOWN = "pi pi-cart-arrow-down";
  static CART_MINUS = "pi pi-cart-minus";
  static CART_PLUS = "pi pi-cart-plus";
  static CHART_BAR = "pi pi-chart-bar";
  static CHART_LINE = "pi pi-chart-line";
  static CHART_PIE = "pi pi-chart-pie";
  static CHART_SCATTER = "pi pi-chart-scatter";
  static CHECK = "pi pi-check";
  static CHECK_CIRCLE = "pi pi-check-circle";
  static CHECK_SQUARE = "pi pi-check-square";
  static CHEVRON_CIRCLE_DOWN = "pi pi-chevron-circle-down";
  static CHEVRON_CIRCLE_LEFT = "pi pi-chevron-circle-left";
  static CHEVRON_CIRCLE_RIGHT = "pi pi-chevron-circle-right";
  static CHEVRON_CIRCLE_UP = "pi pi-chevron-circle-up";
  static CHEVRON_DOWN = "pi pi-chevron-down";
  static CHEVRON_LEFT = "pi pi-chevron-left";
  static CHEVRON_RIGHT = "pi pi-chevron-right";
  static CHEVRON_UP = "pi pi-chevron-up";
  static CIRCLE = "pi pi-circle";
  static CIRCLE_FILL = "pi pi-circle-fill";
  static CLIPBOARD = "pi pi-clipboard";
  static CLOCK = "pi pi-clock";
  static CLONE = "pi pi-clone";
  static CLOUD = "pi pi-cloud";
  static CLOUD_DOWNLOAD = "pi pi-cloud-download";
  static CLOUD_UPLOAD = "pi pi-cloud-upload";
  static CODE = "pi pi-code";
  static COG = "pi pi-cog";
  static COMMENT = "pi pi-comment";
  static COMMENTS = "pi pi-comments";
  static COMPASS = "pi pi-compass";
  static COPY = "pi pi-copy";
  static CREDIT_CARD = "pi pi-credit-card";
  static CROWN = "pi pi-crown";
  static DATABASE = "pi pi-database";
  static DESKTOP = "pi pi-desktop";
  static DELETE_LEFT = "pi pi-delete-left";
  static DIRECTIONS = "pi pi-directions";
  static DIRECTIONS_ALT = "pi pi-directions-alt";
  static DISCORD = "pi pi-discord";
  static DOLLAR = "pi pi-dollar";
  static DOWNLOAD = "pi pi-download";
  static EJECT = "pi pi-eject";
  static ELLIPSIS_H = "pi pi-ellipsis-h";
  static ELLIPSIS_V = "pi pi-ellipsis-v";
  static ENVELOPE = "pi pi-envelope";
  static EQUALS = "pi pi-equals";
  static ERASER = "pi pi-eraser";
  static ETHEREUM = "pi pi-ethereum";
  static EURO = "pi pi-euro";
  static EXCLAMATION_CIRCLE = "pi pi-exclamation-circle";
  static EXCLAMATION_TRIANGLE = "pi pi-exclamation-triangle";
  static EXPAND = "pi pi-expand";
  static EXTERNAL_LINK = "pi pi-external-link";
  static EYE = "pi pi-eye";
  static EYE_SLASH = "pi pi-eye-slash";
  static FACE_SMILE = "pi pi-face-smile";
  static FACEBOOK = "pi pi-facebook";
  static FAST_BACKWARD = "pi pi-fast-backward";
  static FAST_FORWARD = "pi pi-fast-forward";
  static FILE = "pi pi-file";
  static FILE_ARROW_UP = "pi pi-file-arrow-up";
  static FILE_CHECK = "pi pi-file-check";
  static FILE_EDIT = "pi pi-file-edit";
  static FILE_IMPORT = "pi pi-file-import";
  static FILE_PDF = "pi pi-file-pdf";
  static FILE_PLUS = "pi pi-file-plus";
  static FILE_EXCEL = "pi pi-file-excel";
  static FILE_EXPORT = "pi pi-file-export";
  static FILE_WORD = "pi pi-file-word";
  static FILTER = "pi pi-filter";
  static FILTER_FILL = "pi pi-filter-fill";
  static FILTER_SLASH = "pi pi-filter-slash";
  static FLAG = "pi pi-flag";
  static FLAG_FILL = "pi pi-flag-fill";
  static FOLDER = "pi pi-folder";
  static FOLDER_OPEN = "pi pi-folder-open";
  static FOLDER_PLUS = "pi pi-folder-plus";
  static FORWARD = "pi pi-forward";
  static GAUGE = "pi pi-gauge";
  static GIFT = "pi pi-gift";
  static GITHUB = "pi pi-github";
  static GLOBE = "pi pi-globe";
  static GOOGLE = "pi pi-google";
  static GRADUATION_CAP = "pi pi-graduation-cap";
  static HAMMER = "pi pi-hammer";
  static HASHTAG = "pi pi-hashtag";
  static HEADPHONES = "pi pi-headphones";
  static HEART = "pi pi-heart";
  static HEART_FILL = "pi pi-heart-fill";
  static HISTORY = "pi pi-history";
  static HOME = "pi pi-home";
  static HOURGLASS = "pi pi-hourglass";
  static ID_CARD = "pi pi-id-card";
  static IMAGE = "pi pi-image";
  static IMAGES = "pi pi-images";
  static INBOX = "pi pi-inbox";
  static INDIAN_RUPEE = "pi pi-indian-rupee";
  static INFO = "pi pi-info";
  static INFO_CIRCLE = "pi pi-info-circle";
  static INSTAGRAM = "pi pi-instagram";
  static KEY = "pi pi-key";
  static LANGUAGE = "pi pi-language";
  static LIGHTBULB = "pi pi-lightbulb";
  static LINK = "pi pi-link";
  static LINKEDIN = "pi pi-linkedin";
  static LIST = "pi pi-list";
  static LIST_CHECK = "pi pi-list-check";
  static LOCK = "pi pi-lock";
  static LOCK_OPEN = "pi pi-lock-open";
  static MAP = "pi pi-map";
  static MAP_MARKER = "pi pi-map-marker";
  static MARS = "pi pi-mars";
  static MEGAPHONE = "pi pi-megaphone";
  static MICROCHIP = "pi pi-microchip";
  static MICROCHIP_AI = "pi pi-microchip-ai";
  static MICROPHONE = "pi pi-microphone";
  static MICROSOFT = "pi pi-microsoft";
  static MINUS = "pi pi-minus";
  static MINUS_CIRCLE = "pi pi-minus-circle";
  static MOBILE = "pi pi-mobile";
  static MONEY_BILL = "pi pi-money-bill";
  static MOON = "pi pi-moon";
  static OBJECTS_COLUMN = "pi pi-objects-column";
  static PALETTE = "pi pi-palette";
  static PAPERCLIP = "pi pi-paperclip";
  static PAUSE = "pi pi-pause";
  static PAUSE_CIRCLE = "pi pi-pause-circle";
  static PAYPAL = "pi pi-paypal";
  static PEN_TO_SQUARE = "pi pi-pen-to-square";
  static PENCIL = "pi pi-pencil";
  static PERCENTAGE = "pi pi-percentage";
  static PHONE = "pi pi-phone";
  static PINTEREST = "pi pi-pinterest";
  static PLAY = "pi pi-play";
  static PLAY_CIRCLE = "pi pi-play-circle";
  static PLUS = "pi pi-plus";
  static PLUS_CIRCLE = "pi pi-plus-circle";
  static POUND = "pi pi-pound";
  static POWER_OFF = "pi pi-power-off";
  static PRIME = "pi pi-prime";
  static PRINT = "pi pi-print";
  static QRCODE = "pi pi-qrcode";
  static QUESTION = "pi pi-question";
  static QUESTION_CIRCLE = "pi pi-question-circle";
  static RECEIPT = "pi pi-receipt";
  static REDDIT = "pi pi-reddit";
  static REFRESH = "pi pi-refresh";
  static REPLAY = "pi pi-replay";
  static REPLY = "pi pi-reply";
  static SAVE = "pi pi-save";
  static SEARCH = "pi pi-search";
  static SEARCH_MINUS = "pi pi-search-minus";
  static SEARCH_PLUS = "pi pi-search-plus";
  static SEND = "pi pi-send";
  static SERVER = "pi pi-server";
  static SHARE_ALT = "pi pi-share-alt";
  static SHIELD = "pi pi-shield";
  static SHOP = "pi pi-shop";
  static SHOPPING_BAG = "pi pi-shopping-bag";
  static SHOPPING_CART = "pi pi-shopping-cart";
  static SIGN_IN = "pi pi-sign-in";
  static SIGN_OUT = "pi pi-sign-out";
  static SITEMAP = "pi pi-sitemap";
  static SLACK = "pi pi-slack";
  static SLIDERS_H = "pi pi-sliders-h";
  static SLIDERS_V = "pi pi-sliders-v";
  static SORT = "pi pi-sort";
  static SORT_ALPHA_DOWN = "pi pi-sort-alpha-down";
  static SORT_ALPHA_DOWN_ALT = "pi pi-sort-alpha-down-alt";
  static SORT_ALPHA_UP = "pi pi-sort-alpha-up";
  static SORT_ALPHA_UP_ALT = "pi pi-sort-alpha-up-alt";
  static SORT_ALT = "pi pi-sort-alt";
  static SORT_ALT_SLASH = "pi pi-sort-alt-slash";
  static SORT_AMOUNT_DOWN = "pi pi-sort-amount-down";
  static SORT_AMOUNT_DOWN_ALT = "pi pi-sort-amount-down-alt";
  static SORT_AMOUNT_UP = "pi pi-sort-amount-up";
  static SORT_AMOUNT_UP_ALT = "pi pi-sort-amount-up-alt";
  static SORT_DOWN = "pi pi-sort-down";
  static SORT_DOWN_FILL = "pi pi-sort-down-fill";
  static SORT_NUMERIC_DOWN = "pi pi-sort-numeric-down";
  static SORT_NUMERIC_DOWN_ALT = "pi pi-sort-numeric-down-alt";
  static SORT_NUMERIC_UP = "pi pi-sort-numeric-up";
  static SORT_NUMERIC_UP_ALT = "pi pi-sort-numeric-up-alt";
  static SORT_UP = "pi pi-sort-up";
  static SORT_UP_FILL = "pi pi-sort-up-fill";
  static SPARKLES = "pi pi-sparkles";
  static SPINNER = "pi pi-spinner";
  static SPINNER_DOTTED = "pi pi-spinner-dotted";
  static STAR = "pi pi-star";
  static STAR_FILL = "pi pi-star-fill";
  static STAR_HALF = "pi pi-star-half";
  static STAR_HALF_FILL = "pi pi-star-half-fill";
  static STEP_BACKWARD = "pi pi-step-backward";
  static STEP_BACKWARD_ALT = "pi pi-step-backward-alt";
  static STEP_FORWARD = "pi pi-step-forward";
  static STEP_FORWARD_ALT = "pi pi-step-forward-alt";
  static STOP = "pi pi-stop";
  static STOP_CIRCLE = "pi pi-stop-circle";
  static STOPWATCH = "pi pi-stopwatch";
  static SUN = "pi pi-sun";
  static SYNC = "pi pi-sync";
  static TABLE = "pi pi-table";
  static TABLET = "pi pi-tablet";
  static TAG = "pi pi-tag";
  static TAGS = "pi pi-tags";
  static TELEGRAM = "pi pi-telegram";
  static TH_LARGE = "pi pi-th-large";
  static THUMBS_DOWN = "pi pi-thumbs-down";
  static THUMBS_DOWN_FILL = "pi pi-thumbs-down-fill";
  static THUMBS_UP = "pi pi-thumbs-up";
  static THUMBS_UP_FILL = "pi pi-thumbs-up-fill";
  static THUMBTACK = "pi pi-thumbtack";
  static TICKET = "pi pi-ticket";
  static TIKTOK = "pi pi-tiktok";
  static TIMES = "pi pi-times";
  static TIMES_CIRCLE = "pi pi-times-circle";
  static TRASH = "pi pi-trash";
  static TROPHY = "pi pi-trophy";
  static TRUCK = "pi pi-truck";
  static TURKISH_LIRA = "pi pi-turkish-lira";
  static TWITCH = "pi pi-twitch";
  static TWITTER = "pi pi-twitter";
  static UNDO = "pi pi-undo";
  static UNLOCK = "pi pi-unlock";
  static UPLOAD = "pi pi-upload";
  static USER = "pi pi-user";
  static USER_EDIT = "pi pi-user-edit";
  static USER_MINUS = "pi pi-user-minus";
  static USER_PLUS = "pi pi-user-plus";
  static USERS = "pi pi-users";
  static VENUS = "pi pi-venus";
  static VERIFIED = "pi pi-verified";
  static VIDEO = "pi pi-video";
  static VIMEO = "pi pi-vimeo";
  static VOLUME_DOWN = "pi pi-volume-down";
  static VOLUME_OFF = "pi pi-volume-off";
  static VOLUME_UP = "pi pi-volume-up";
  static WALLET = "pi pi-wallet";
  static WAREHOUSE = "pi pi-warehouse";
  static WAVE_PULSE = "pi pi-wave-pulse";
  static WHATSAPP = "pi pi-whatsapp";
  static WIFI = "pi pi-wifi";
  static WINDOW_MAXIMIZE = "pi pi-window-maximize";
  static WINDOW_MINIMIZE = "pi pi-window-minimize";
  static WRENCH = "pi pi-wrench";
  static YOUTUBE = "pi pi-youtube";
};
var PrimeNGConfig = class _PrimeNGConfig {
  ripple = false;
  inputStyle = signal("outlined");
  overlayOptions = {};
  csp = signal({
    nonce: void 0
  });
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List",
      selectColor: "Select a color",
      removeLabel: "Remove",
      browseFiles: "Browse Files",
      maximizeLabel: "Maximize"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  static ɵfac = function PrimeNGConfig_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeNGConfig)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PrimeNGConfig,
    factory: _PrimeNGConfig.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNGConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static ɵfac = function Header_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Header)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Header,
    selectors: [["p-header"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      standalone: true,
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static ɵfac = function Footer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Footer)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      standalone: true,
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static ɵfac = function PrimeTemplate_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PrimeTemplate)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [0, "pTemplate", "name"]
    },
    standalone: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      standalone: true,
      host: {}
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static ɵfac = function SharedModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SharedModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SharedModule,
    imports: [Header, Footer, PrimeTemplate],
    exports: [Header, Footer, PrimeTemplate]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [Header, Footer, PrimeTemplate],
      exports: [Header, Footer, PrimeTemplate]
    }]
  }], null, null);
})();
var TranslationKeys = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static NO_FILTER = "noFilter";
  static LT = "lt";
  static LTE = "lte";
  static GT = "gt";
  static GTE = "gte";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static CLEAR = "clear";
  static APPLY = "apply";
  static MATCH_ALL = "matchAll";
  static MATCH_ANY = "matchAny";
  static ADD_RULE = "addRule";
  static REMOVE_RULE = "removeRule";
  static ACCEPT = "accept";
  static REJECT = "reject";
  static CHOOSE = "choose";
  static UPLOAD = "upload";
  static CANCEL = "cancel";
  static PENDING = "pending";
  static FILE_SIZE_TYPES = "fileSizeTypes";
  static DAY_NAMES = "dayNames";
  static DAY_NAMES_SHORT = "dayNamesShort";
  static DAY_NAMES_MIN = "dayNamesMin";
  static MONTH_NAMES = "monthNames";
  static MONTH_NAMES_SHORT = "monthNamesShort";
  static FIRST_DAY_OF_WEEK = "firstDayOfWeek";
  static TODAY = "today";
  static WEEK_HEADER = "weekHeader";
  static WEAK = "weak";
  static MEDIUM = "medium";
  static STRONG = "strong";
  static PASSWORD_PROMPT = "passwordPrompt";
  static EMPTY_MESSAGE = "emptyMessage";
  static EMPTY_FILTER_MESSAGE = "emptyFilterMessage";
  static SHOW_FILTER_MENU = "showFilterMenu";
  static HIDE_FILTER_MENU = "hideFilterMenu";
  static SELECTION_MESSAGE = "selectionMessage";
  static ARIA = "aria";
  static SELECT_COLOR = "selectColor";
  static BROWSE_FILES = "browseFiles";
};
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static ɵfac = function TreeDragDropService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TreeDragDropService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

export {
  ObjectUtils,
  UniqueComponentId,
  zindexutils,
  ConfirmEventType,
  ConfirmationService,
  ContextMenuService,
  FilterMatchMode,
  FilterOperator,
  FilterService,
  MessageService,
  OverlayService,
  PrimeIcons,
  PrimeNGConfig,
  Header,
  Footer,
  PrimeTemplate,
  SharedModule,
  TranslationKeys,
  TreeDragDropService
};
//# sourceMappingURL=chunk-BU2VRPG6.js.map
