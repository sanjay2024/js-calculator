const getHistory = () => {
        return document.querySelector('[data-previous-operand]').innerText
}
const printHistoryValue = (num) => {
        return document.querySelector('[data-previous-operand]').innerText = num;
}
const getOutput = () => {
        return document.querySelector('[data-current-operand]').innerText;
};
const printOutput = (num) => {
        if (num == "") {
                document.querySelector('[data-current-operand]').innerText = num;

        }
        else {
                document.querySelector('[data-current-operand]').innerText = getNumberFormat(num);
        }

}
const getNumberFormat = (num) => {
        if (num == "-") {
                return "";
        }
        var n = Number(num);
        var value = n.toLocaleString("en");
        return value;
}
const reverseFormat = (number) => {
        return Number(number.replace(/,/g, ''));

}
// printOutput(123946278134);
// alert(reverseFormat(getOutput()));
const numbers = document.querySelectorAll('[data-number]');
numbers.forEach((button) => {
        button.addEventListener('click', () => {


                var output = reverseFormat(getOutput());
                output = output + button.innerText;
                printOutput(output);
        })
})
const allClear = document.querySelector('[data-all-clear]');
allClear.addEventListener('click', () => {
        printOutput("");
        printHistoryValue("");
})
const delete_num = document.querySelector('[data-delete]');
delete_num.addEventListener('click', () => {
        var output = reverseFormat(getOutput()).toString();
        output = output.substring(0, output.length - 1);
        printOutput(output);
})
const equals = document.querySelector('[data-equals]');
equals.addEventListener('click', () => {
        var output = getOutput()
        // console.log(output);
        var history = getHistory();
        if (output == "" && history != "") {
                if (isNaN(history[history.length - 1])) {
                        history = history.substring(0, history.length - 1);
                }
        }
        if (output != "" || history != "") {

                output = output == "" ? output : reverseFormat(output);
                history = history + output;
                var result = eval(history);
                printOutput(result);
                printHistoryValue("");
        }
})

const operators = document.querySelectorAll('[data-operation]');
operators.forEach((op) => {
        op.addEventListener('click', () => {
                var history = getHistory();
                var output = getOutput()
                if (output == "" && history != "") {
                        if (isNaN(history[history.length - 1])) {
                                history = history.substring(0, history.length - 1);
                        }
                }
                console.log(history);
                if (output != "" || history != "") {
                        output = output == "" ? output : reverseFormat(output);
                        console.log(output);
                        history = history + output + op.innerHTML;
                        console.log(history);
                        printHistoryValue(history);
                        printOutput("");
                }

        })
});