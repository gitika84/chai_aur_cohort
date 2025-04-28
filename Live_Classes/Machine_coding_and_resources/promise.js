class MyPromise {
    constructor(executorfn){
        this._state = "Pending",
        this._successCallbacks = [],
        this._errorCallbacks = [],
        this._finallyCallbacks = [],
        this._Value = undefined
        executorfn(
            this.resolverFunction.bind(this),
            this.rejectorFunction.bind(this)
        )
    }

    then(cb){
        if(this._state == "FullFilled"){
            cb(this._Value)
            return this
        }
        this._successCallbacks.push(cb)
        return this
    }

    catch(cb){
        if(this._state == "Rejected"){
            cb(this._Value)
            return this
        }
        this._errorCallbacks.push(cb)
        return this
    }

    finally(cb){
        if(this._state != "Pending"){
            cb()
            return this
        }
        this._finallyCallbacks.push(cb)
        return this
    }

    resolverFunction(Value){
        this._state = "FullFilled"
        this._successCallbacks.forEach((cb) => cb(Value))
        this._finallyCallbacks.forEach((cb) => cb())
    }

    rejectorFunction(Value){
        this._state = "Rejected"
        this._errorCallbacks.forEach((cb) => cb(Value))
        this._finallyCallbacks.forEach((cb) => cb())
    }
}

function wait(seconds){
    return new MyPromise((resolve , reject) => {
        setTimeout(() => {
            resolve("rthrvry")
        }, seconds * 1000)
    })
}

wait(3)
    .then((e) => console.log("then function",e ))
    .catch(() => console.log("catch function"))
    .finally(() => console.log("finally function"))
