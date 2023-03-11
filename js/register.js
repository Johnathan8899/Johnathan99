// Đối tượng `Validator` (constructor function)
/** Các note cần lưu ý:
 * parentElement: thuộc tính dùng để tìm thẻ cha của element.
 * 
 */
function Validator(options){
     var formElelment = document.querySelector(options.form);
     
     var selectorRules = {};
     //options.rules là 1 array.
     // Hàm thực hiện validate
     function validate (inputElement, rule){
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
        var errorMessage;

        // Lấy ra các rules của selector
        var rules = selectorRules[rule.selector];
        console.log(rules);

        // Lặp qua từng rules và kiểm tra
        // Nếu có lỗi thì dừng việc kiểm tra
        for (var i = 0; i < rules.length; i++){
            errorMessage = rules[i](inputElement.value);
            if (errorMessage) break;
        }
        
        if (errorMessage){
            errorElement.innerHTML = errorMessage;
            errorElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerHTML = '';
            errorElement.parentElement.classList.remove('invalid');
        }
     }
     // Lấy element của form validate
     if (formElelment){
        options.rules.forEach(function(rule){

            // Lưu lại các rules cho mỗi input:
            // selectorRules[rule.selector] = rule.test;
            if (Array.isArray(selectorRules[rule.selector])){
                selectorRules[rule.selector].push(rule.test);
            } else {
                selectorRules[rule.selector] = [rule.test];
            }
            // rule.slector: dùng để gọi đến giá trị của ô nhập vào.
            var inputElement = formElelment.querySelector(rule.selector);  
            // console.log(rule.selector);
            if (inputElement){
                // Xử lý khi blur ra ngoài sẽ báo lỗi
                inputElement.onblur = function(){
                    validate(inputElement, rule);
                };
                // Xử lý khi nhập vào thì sẽ mất dòng lỗi ở dưới:
                inputElement.oninput = function(){
                    var errorElement = inputElement.parentElement.querySelector(options.errorSelector)
                    errorElement.innerHTML = '';
                    errorElement.parentElement.classList.remove('invalid');
                }
            }
        });
        console.log(selectorRules);
     }
}

// Định nghĩa các rules
// Nguyên tác của rules:
// 1. Khi có lỗi thì >>> Trả ra message lỗi.
// 2. Khi hợp lệ thì >>> Không trả ra cái gì cả (undifined)
// Các rules này có 2 key là selector và hàm test. Key sel ector để nhập giá trị và hàm test dùng để kiểm tra giá trị nhập vào đã đúng hay chưa.

Validator.isRequired = function(selector){
    return {
        selector: selector,
        test: value => {
            // Khi nhập giá trị hợp lệ sẽ trả về undefined còn không thì trả về 'vui lòng ... ';
            return value.trim() ? undefined : 'Vui lòng nhập lại trường này'
        }
    }
}

Validator.isEmail = function(selector){
    return {
        selector: selector,
        test: value => {
            var mailformat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
            return mailformat.test(value) ? undefined : 'Trường này phải là email'
        }
    }
}

Validator.minLength = function(selector, min){
    return {
        selector: selector,
        test: value => {
            // Khi nhập giá trị hợp lệ sẽ trả về undefined còn không thì trả về 'vui lòng ... ';
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    }
}

Validator.isConfirm = function (selector, getConfirmValue, message){ 
    return {
        selector: selector,
        test: value => {
            return value === getConfirmValue() ? undefined : message || 'Giá trị nhập không trùng khớp';
        }
    }
}

Validator.minPhone = function(selector, min){
    return {
        selector: selector,
        test: value => {
            // Khi nhập giá trị hợp lệ sẽ trả về undefined còn không thì trả về 'vui lòng ... ';
            return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} chữ số`;
        }
    }
}