export const equalIgnoreCase = () => {
    String.prototype.equalsIgnoreCase = function (compareString) {
        return this.toUpperCase() === compareString.toUpperCase()
    }
}