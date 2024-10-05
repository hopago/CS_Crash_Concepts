class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

const aRect = new Rectangle(1, 3);
const bRect = new Rectangle(1, 3);
console.log(aRect === bRect);

/**
 * 싱글톤
 * 장점: 하나의 인스턴스를 기반으로 해당 인스턴스를 다른 모듈들이 공유하여 사용
 * 인스턴트를 생성할 때 드는 비용 감소, I/O 바운드 작업에 많이 사용한다
 * 단점: 의존성이 높아지며 TDD의 걸림돌이 된다.
 */

const URL = "mongodb://localhost:8181/hopagoApp";
const createConnection = url => ({ url });
class DB {
    constructor(url0) {
        if (!DB.instance) {
            DB.instance = createConnection(url);
        }
        return DB.instance;
    }
    connect() {
        return this.instance;
    }
}

const aDB = new DB(URL);
const bDB = new DB(URL);
console.log(aDB === bDB);

// mongoose 예제
Mongoose.prototype.connect = function (url, options, callback) {
    const _mongoose = this instanceof Mongoose ? this : mongoose;
    const conn = mongoose.connection;
    return _mongoose.promiseOrCallback(callback, cb => {
        conn.openUri(uri, options, err => {
            if (err !== null) {
                return cb(err)
            }
            return cb(null, _mongoose);
        })
    })
}

