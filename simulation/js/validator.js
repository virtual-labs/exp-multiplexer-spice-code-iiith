import { getBoxOrder } from "./main.js";

function convertToLowerCase(inputString) {
    return inputString.toLowerCase();
}

export function isFilled() {
    // checking verilog module
    let fileName = document.getElementById("file-name");
    let VolSrcName = document.getElementById("voltage-source-name");
    let volPos = document.getElementById("voltage-positive-terminal-selector");
    let volNeg = document.getElementById("voltage-negative-terminal-selector");
    let subcktName = document.getElementById("subckt-name");
    let subcktIn1 = document.getElementById("subckt-in1-name");
    let subcktIn2 = document.getElementById("subckt-in2-name");
    let subcktIn3 = document.getElementById("subckt-in3-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let inv_instance1 = document.getElementById("inv-call1-instance-name");
    let inv_in1 = document.getElementById("inv-call1-input");
    let inv_out1 = document.getElementById("inv-call1-output");
    let pass_transistor1Name = document.getElementById("pass-transistor1-instance-name");
    let pass_transistor1Control = document.getElementById("pass-transistor1-control-input");
    let pass_transistor1In = document.getElementById("pass-transistor1-in-input");
    let pass_transistor1Out = document.getElementById("pass-transistor1-output");
    let pass_transistor2Name = document.getElementById("pass-transistor2-instance-name");
    let pass_transistor2Control = document.getElementById("pass-transistor2-control-input");
    let pass_transistor2In = document.getElementById("pass-transistor2-in-input");
    let pass_transistor2Out = document.getElementById("pass-transistor2-output");
    let gateCallInstance = document.getElementById("gate-call-instance-name");
    let gateCallIn1 = document.getElementById("gate-call-input1");
    let gateCallIn2 = document.getElementById("gate-call-input2");
    let gateCallIn3 = document.getElementById("gate-call-input3");
    let gateCallOut = document.getElementById("gate-call-output");
    let gateCallSubckt = document.getElementById("gate-call-subckt-name");

    let error = "Highlighted part of the code is incomplete."
    if (fileName.value.trim() == '') {
        printErrors(error, fileName);
        return false;
    }
    if (VolSrcName.value.trim() == '') {
        printErrors(error, VolSrcName);
        return false;
    }
    if (volPos.value === "") {
        printErrors(error, volPos);
        return false;
    }
    if (volNeg.value === "") {
        printErrors(error, volNeg);
        return false;
    }
    if (subcktName.value.trim() == '') {
        printErrors(error, subcktName);
        return false;
    }
    if (subcktOut.value.trim() == '') {
        printErrors(error, subcktOut);
        return false;
    }
    if (subcktIn1.value.trim() == '') {
        printErrors(error, subcktIn1);
        return false;
    }
    if (subcktIn2.value.trim() == '') {
        printErrors(error, subcktIn2);
        return false;
    }
    if (subcktIn3.value.trim() == '') {
        printErrors(error, subcktIn3);
        return false;
    }
    if (inv_instance1.value.trim() == '') {
        printErrors(error, inv_instance1);
        return false;
    }
    if (inv_in1.value.trim() == '') {
        printErrors(error, inv_in1);
        return false;
    }
    if (inv_out1.value.trim() == '') {
        printErrors(error, inv_out1);
        return false;
    }
    if (pass_transistor1Name.value.trim() == '') {
        printErrors(error, pass_transistor1Name);
        return false;
    }
    if (pass_transistor1Control.value.trim() == '') {
        printErrors(error, pass_transistor1Control);
        return false;
    }
    if (pass_transistor1In.value.trim() == '') {
        printErrors(error, pass_transistor1In);
        return false;
    }
    if (pass_transistor1Out.value.trim() == '') {
        printErrors(error, pass_transistor1Out);
        return false;
    }
    if (pass_transistor2Name.value.trim() == '') {
        printErrors(error, pass_transistor2Name);
        return false;
    }
    if (pass_transistor2Control.value.trim() == '') {
        printErrors(error, pass_transistor2Control);
        return false;
    }
    if (pass_transistor2In.value.trim() == '') {
        printErrors(error, pass_transistor2In);
        return false;
    }
    if (pass_transistor2Out.value.trim() == '') {
        printErrors(error, pass_transistor2Out);
        return false;
    }
    if (gateCallInstance.value.trim() == '') {
        printErrors(error, gateCallInstance);
        return false;
    }
    if (gateCallIn1.value.trim() == '') {
        printErrors(error, gateCallIn1);
        return false;
    }
    if (gateCallIn2.value.trim() == '') {
        printErrors(error, gateCallIn2);
        return false;
    }
    if (gateCallIn3.value.trim() == '') {
        printErrors(error, gateCallIn3);
        return false;
    }
    if (gateCallOut.value.trim() == '') {
        printErrors(error, gateCallOut);
        return false;
    }
    if (gateCallSubckt.value.trim() == '') {
        printErrors(error, gateCallSubckt);
        return false;
    }
    return true;
}

export function printErrors(errorMsg, errorID) {
    document.getElementById('result').innerHTML = errorMsg;
    document.getElementById('result').classList.remove('text-success');
    document.getElementById('result').classList.add('text-danger');
    if (errorID) {
        errorID.classList.add('highlight');
        setTimeout(function () {
            errorID.classList.remove('highlight');
        }, 3000);
    }
}

export function isValid() {

    // checking the order of the codeblocks
    const boxOrder1 = getBoxOrder('spice-code');
    let container = document.getElementById("container");
    if (boxOrder1[0] !== "1" || boxOrder1[1] !== "2" || boxOrder1[2] !== "3" || boxOrder1[3] !== "4" || boxOrder1[4] !== "5" || boxOrder1[5] !== "6" || boxOrder1[6] !== "7") {
        let msg = "Please rearrange the code blocks in the correct order."
        printErrors(msg, container);
        return false;
    }

    // Checking if the node and variable names are valid
    let fileName = document.getElementById("file-name");
    let VolSrcName = document.getElementById("voltage-source-name");
    let subcktName = document.getElementById("subckt-name");
    let subcktIn1 = document.getElementById("subckt-in1-name");
    let subcktIn2 = document.getElementById("subckt-in2-name");
    let subcktIn3 = document.getElementById("subckt-in3-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let inv_instance1 = document.getElementById("inv-call1-instance-name");
    let pass_transistor1Name = document.getElementById("pass-transistor1-instance-name");
    let pass_transistor2Name = document.getElementById("pass-transistor2-instance-name");
    let gateCallInstance = document.getElementById("gate-call-instance-name");
    let gateCallSubckt = document.getElementById("gate-call-subckt-name");

    var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;
    if (!regex.test(VolSrcName.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, VolSrcName);
        return false;
    }
    if (!regex.test(subcktName.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, subcktName);
        return false;
    }
    if (!regex.test(subcktIn1.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktIn1);
        return false;
    }
    if (!regex.test(subcktIn2.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktIn2);
        return false;
    }
    if (!regex.test(subcktIn3.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktIn3);
        return false;
    }
    if (!regex.test(subcktOut.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, subcktOut);
        return false;
    }
    if (!regex.test(inv_instance1.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, inv_instance1);
        return false;
    }
    if (!regex.test(pass_transistor1Name.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, pass_transistor1Name);
        return false;
    }
    if (!regex.test(pass_transistor2Name.value.trim())) {
        let msg = "Invalid Name.";
        printErrors(msg, pass_transistor2Name);
        return false;
    }
    if (!regex.test(gateCallInstance.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, gateCallInstance);
        return false;
    }
    if (!regex.test(gateCallSubckt.value.trim())) {
        let msg = "Invalid Name."
        printErrors(msg, gateCallSubckt);
        return false;
    }

    // mapping variables
    const variableMap = new Map();
    const variableSubcktMap = new Map();
    let variableList = ["ptm_45nm.txt", "supply", "lmin", "wmin", "wp", convertToLowerCase(VolSrcName.value.trim()), convertToLowerCase(subcktName.value.trim()), convertToLowerCase(gateCallInstance.value.trim()), "V1", "V2", "V3", "vdd", "gnd"];
    let variableSubcktList = [convertToLowerCase(subcktName.value.trim()), convertToLowerCase(inv_instance1.value.trim()), convertToLowerCase(pass_transistor1Name.value.trim()), convertToLowerCase(pass_transistor2Name.value.trim()), "vdd", "gnd", "wmin", "lmin"];
    let variables_regular = [VolSrcName, subcktName, gateCallInstance];
    let subcktVars = [subcktName, inv_instance1, pass_transistor1Name, pass_transistor2Name];

    // Iterate over the variable list
    for (let variable in variableList) {
        // Check if the variable already exists in the Map
        if (variableMap.has(variableList[variable])) {
            // If it exists, increment the count by 1
            let count = variableMap.get(variableList[variable]);
            variableMap.set(variableList[variable], count + 1);
        } else {
            // If it doesn't exist, set the count to 1
            variableMap.set(variableList[variable], 1);
        }

    }
    // Iterate over the variable list subckt
    for (let variable in variableSubcktList) {
        // Check if the variable already exists in the Map
        if (variableSubcktMap.has(variableSubcktList[variable])) {
            // If it exists, increment the count by 1
            let count = variableSubcktMap.get(variableSubcktList[variable]);
            variableSubcktMap.set(variableSubcktList[variable], count + 1);
        } else {
            // If it doesn't exist, set the count to 1
            variableSubcktMap.set(variableSubcktList[variable], 1);
        }
    }
    // checking if variables names declared more than once
    for (let variable in variables_regular) {
        if (variableMap.get(convertToLowerCase(variables_regular[variable].value.trim())) > 1) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, variables_regular[variable]);
            return false;
        }
    }
    for (let variable in subcktVars) {
        if (variableSubcktMap.get(convertToLowerCase(subcktVars[variable].value.trim())) > 1) {
            let msg = 'Highlighted variable declared more than once'
            printErrors(msg, subcktVars[variable]);
            return false;
        }
    }
    // checking if file name matches
    if (fileName.value.trim() !== 'PTM_45nm.txt') {
        let msg = "There is no file defined with the name " + fileName.value.trim();
        printErrors(msg, fileName);
        return false;
    }

    // checking if voltage source name is not equal to vdd
    if (convertToLowerCase(VolSrcName.value.trim()) === "vdd") {
        let msg = "Name of the voltage source cannot be vdd as this variable already in use";
        printErrors(msg, VolSrcName);
        return false;
    }
    if (gateCallInstance.value.trim()[0] != "x" && gateCallInstance.value.trim()[0] != "X") {
        let msg = "When instantiating a sub circuit, the name of the instance must always start with 'x' or 'X'"
        printErrors(msg, gateCallInstance);
        return false;
    }
    if (inv_instance1.value.trim()[0] != "x" && inv_instance1.value.trim()[0] != "X") {
        let msg = "When instantiating a sub circuit, the name of the instance must always start with 'x' or 'X'"
        printErrors(msg, inv_instance1);
        return false;
    }
    if (pass_transistor1Name.value.trim()[0] != "x" && pass_transistor1Name.value.trim()[0] != "X") {
        let msg = "When instantiating a sub circuit, the name of the instance must always start with 'x' or 'X'"
        printErrors(msg, pass_transistor1Name);
        return false;
    }
    if (pass_transistor2Name.value.trim()[0] != "x" && pass_transistor2Name.value.trim()[0] != "X") {
        let msg = "When instantiating a sub circuit, the name of the instance must always start with 'x' or 'X'"
        printErrors(msg, pass_transistor2Name);
        return false;
    }
    return true;
}

export function printObsTable() {
    let correct = false;
    let subcktName = document.getElementById("subckt-name");
    let subcktIn1 = document.getElementById("subckt-in1-name");
    let subcktIn2 = document.getElementById("subckt-in2-name");
    let subcktIn3 = document.getElementById("subckt-in3-name");
    let subcktOut = document.getElementById("subckt-out-name");
    let inv_in1 = convertToLowerCase(document.getElementById("inv-call1-input").value.trim());
    let inv_out1 = convertToLowerCase(document.getElementById("inv-call1-output").value.trim());
    let pass_transistor1Control = convertToLowerCase(document.getElementById("pass-transistor1-control-input").value.trim());
    let pass_transistor1In = convertToLowerCase(document.getElementById("pass-transistor1-in-input").value.trim());
    let pass_transistor1Out = convertToLowerCase(document.getElementById("pass-transistor1-output").value.trim());
    let pass_transistor2Control = convertToLowerCase(document.getElementById("pass-transistor2-control-input").value.trim());
    let pass_transistor2In = convertToLowerCase(document.getElementById("pass-transistor2-in-input").value.trim());
    let pass_transistor2Out = convertToLowerCase(document.getElementById("pass-transistor2-output").value.trim());
    let gateCallIn1 = document.getElementById("gate-call-input1");
    let gateCallIn2 = document.getElementById("gate-call-input2");
    let gateCallIn3 = document.getElementById("gate-call-input3");
    let gateCallOut = document.getElementById("gate-call-output");
    let gateCallSubckt = document.getElementById("gate-call-subckt-name");
    var regex = /^[a-zA-Z_$%][a-zA-Z0-9_$%]*$/;

    // checking subckt connection
    const out = convertToLowerCase(subcktOut.value.trim())
    const in1 = convertToLowerCase(subcktIn1.value.trim())
    const in2 = convertToLowerCase(subcktIn2.value.trim())
    const in3 = convertToLowerCase(subcktIn3.value.trim())

    if (inv_in1 === in1 && convertToLowerCase(gateCallIn1.value.trim()) === "s") {
        if (convertToLowerCase(gateCallIn2.value.trim()) === "a" && convertToLowerCase(gateCallIn3.value.trim()) === "b") {
            if (inv_out1 !== "vdd" && inv_out1 !== "gnd" && inv_out1 !== in1 && inv_out1 !== in2 && inv_out1!==in3 && inv_out1!==in3 && inv_out1 !== out && regex.test(inv_out1)) {
                const s=in1, a=in2, b=in3, s_=inv_out1;
                if(pass_transistor1Out===out && pass_transistor2Out===out)
                {
                    if(pass_transistor1Control===s_ && pass_transistor1In===a && pass_transistor2Control===s && pass_transistor2In===b)
                    {
                        correct=true;
                    }
                    else if(pass_transistor2Control===s_ && pass_transistor2In===a && pass_transistor1Control===s && pass_transistor1In===b)
                    {
                        correct=true;
                    } 
                }
            }
        }
        else if (convertToLowerCase(gateCallIn2.value.trim()) === "b" && convertToLowerCase(gateCallIn3.value.trim()) === "a") {
            if (inv_out1 !== "vdd" && inv_out1 !== "gnd" && inv_out1 !== in1 && inv_out1 !== in2 && inv_out1!==in3 && inv_out1!==in3 && inv_out1 !== out && regex.test(inv_out1)) {
                const s=in1, a=in3, b=in2, s_=inv_out1;
                if(pass_transistor1Out===out && pass_transistor2Out===out)
                {
                    if(pass_transistor1Control===s_ && pass_transistor1In===a && pass_transistor2Control===s && pass_transistor2In===b)
                    {
                        correct=true;
                    }
                    else if(pass_transistor2Control===s_ && pass_transistor2In===a && pass_transistor1Control===s && pass_transistor1In===b)
                    {
                        correct=true;
                    } 
                }
            }
        }
    }
    else if (inv_in1 === in2 && convertToLowerCase(gateCallIn2.value.trim()) === "s") {
        if (convertToLowerCase(gateCallIn1.value.trim()) === "a" && convertToLowerCase(gateCallIn3.value.trim()) === "b") {
            if (inv_out1 !== "vdd" && inv_out1 !== "gnd" && inv_out1 !== in1 && inv_out1 !== in2 && inv_out1!==in3 && inv_out1!==in3 && inv_out1 !== out && regex.test(inv_out1)) {
                const s=in2, a=in1, b=in3, s_=inv_out1;
                if(pass_transistor1Out===out && pass_transistor2Out===out)
                {
                    if(pass_transistor1Control===s_ && pass_transistor1In===a && pass_transistor2Control===s && pass_transistor2In===b)
                    {
                        correct=true;
                    }
                    else if(pass_transistor2Control===s_ && pass_transistor2In===a && pass_transistor1Control===s && pass_transistor1In===b)
                    {
                        correct=true;
                    } 
                }
            }
        }
        else if (convertToLowerCase(gateCallIn1.value.trim()) === "b" && convertToLowerCase(gateCallIn3.value.trim()) === "a") {
            if (inv_out1 !== "vdd" && inv_out1 !== "gnd" && inv_out1 !== in1 && inv_out1 !== in2 && inv_out1!==in3 && inv_out1!==in3 && inv_out1 !== out && regex.test(inv_out1)) {
                const s=in2, a=in3, b=in1, s_=inv_out1;
                if(pass_transistor1Out===out && pass_transistor2Out===out)
                {
                    if(pass_transistor1Control===s_ && pass_transistor1In===a && pass_transistor2Control===s && pass_transistor2In===b)
                    {
                        correct=true;
                    }
                    else if(pass_transistor2Control===s_ && pass_transistor2In===a && pass_transistor1Control===s && pass_transistor1In===b)
                    {
                        correct=true;
                    } 
                }
            }
        }
    }
    else if (inv_in1 === in3 && convertToLowerCase(gateCallIn3.value.trim()) === "s") {
        if (convertToLowerCase(gateCallIn1.value.trim()) === "a" && convertToLowerCase(gateCallIn2.value.trim()) === "b") {
            if (inv_out1 !== "vdd" && inv_out1 !== "gnd" && inv_out1 !== in1 && inv_out1 !== in2 && inv_out1!==in3 && inv_out1!==in3 && inv_out1 !== out && regex.test(inv_out1)) {
                const s=in3, a=in1, b=in2, s_=inv_out1;
                if(pass_transistor1Out===out && pass_transistor2Out===out)
                {
                    if(pass_transistor1Control===s_ && pass_transistor1In===a && pass_transistor2Control===s && pass_transistor2In===b)
                    {
                        correct=true;
                    }
                    else if(pass_transistor2Control===s_ && pass_transistor2In===a && pass_transistor1Control===s && pass_transistor1In===b)
                    {
                        correct=true;
                    } 
                }
            }
        }
        else if (convertToLowerCase(gateCallIn1.value.trim()) === "b" && convertToLowerCase(gateCallIn2.value.trim()) === "a") {
            if (inv_out1 !== "vdd" && inv_out1 !== "gnd" && inv_out1 !== in1 && inv_out1 !== in2 && inv_out1!==in3 && inv_out1!==in3 && inv_out1 !== out && regex.test(inv_out1)) {
                const s=in3, a=in2, b=in1, s_=inv_out1;
                if(pass_transistor1Out===out && pass_transistor2Out===out)
                {
                    if(pass_transistor1Control===s_ && pass_transistor1In===a && pass_transistor2Control===s && pass_transistor2In===b)
                    {
                        correct=true;
                    }
                    else if(pass_transistor2Control===s_ && pass_transistor2In===a && pass_transistor1Control===s && pass_transistor1In===b)
                    {
                        correct=true;
                    } 
                }
            }
        }
    }

    if (in1 === in2 || in1===in3 || in1 === out || in2 === out ||in2===in3 || in3==out) {
        correct = false
    }

    // checking if voltage source declared correctly
    let volPos = document.getElementById("voltage-positive-terminal-selector");
    let volNeg = document.getElementById("voltage-negative-terminal-selector");
    if (volPos.value !== "vdd") {
        correct = false;
    }
    if (volNeg.value === "vdd" || volNeg.value === "1.1") {
        correct = false;
    }
    // checking the subcircuit calling
    if (convertToLowerCase(gateCallIn1.value.trim()) !== "a" && convertToLowerCase(gateCallIn1.value.trim()) !== "b" && convertToLowerCase(gateCallIn1.value.trim())!=="s") {
        correct = false;
    }
    if (convertToLowerCase(gateCallIn2.value.trim()) !== "a" && convertToLowerCase(gateCallIn2.value.trim()) !== "b" && convertToLowerCase(gateCallIn2.value.trim())!=="s") {
        correct = false;
    }
    if (convertToLowerCase(gateCallIn3.value.trim()) !== "a" && convertToLowerCase(gateCallIn3.value.trim()) !== "b" && convertToLowerCase(gateCallIn3.value.trim())!=="s") {
        correct = false;
    }
    if (convertToLowerCase(gateCallIn1.value.trim()) === convertToLowerCase(gateCallIn2.value.trim()) || convertToLowerCase(gateCallIn1.value.trim()) === convertToLowerCase(gateCallIn3.value.trim()) || convertToLowerCase(gateCallIn2.value.trim()) === convertToLowerCase(gateCallIn3.value.trim())) {
        correct = false;
    }
    if (convertToLowerCase(gateCallOut.value.trim()) !== "out") {
        correct = false;
    }
    if (convertToLowerCase(gateCallSubckt.value.trim()) !== convertToLowerCase(subcktName.value.trim())) {
        correct = false;
    }

    if (correct === true) {
        document.getElementById("obs-table").innerHTML = `<div>
    <div class="is-size-4">Report</div>
    <pre>
        Circuit: *xor_gate*

        Doing analysis at TEMP = 27.000000 and TNOM = 27.000000

        Warning: v2: no DC value, transient time 0 value used
        Warning: v1: no DC value, transient time 0 value used
        
        Initial Transient Solution
        --------------------------

        Node                                   Voltage
        ----                                   -------
        vdd                                        1.1
        xn.s_                                      1.1
        s                                            0
        xn.xpt1.not                         4.6641e-08
        out                                5.05842e-08
        a                                            0
        xn.xpt2.not                                1.1
        b                                            0
        v3#branch                          2.21776e-12
        v2#branch                          1.10001e-12
        v1#branch                          7.25249e-12
        vvdd#branch                       -2.04901e-11

         Reference value :  9.15830e-08
        No. of Data Rows : 16722
    </pre>
    <div class="is-size-4">Input graph</div>
    <img src='images/input_mux.png' alt='image of xor input graph'>
    <div class="is-size-4">Output graph</div>
    <img src='images/output_mux.png' alt='image of xor output graph'>
</div>`;
        document.getElementById("result").innerHTML = "<span>&#10003;</span> Success"
        document.getElementById("result").className = "text-success";
    }
    else {
        document.getElementById("result").innerHTML = "<span>&#10007;</span> Fail";
        document.getElementById("result").className = "text-danger";
    }
    return;
}

