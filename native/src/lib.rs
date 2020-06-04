use neon::prelude::*;

pub fn fibonacci(n: i64) -> i64 {
    if n < 2 {
        1
    } else {
        fibonacci(n - 1) + fibonacci(n - 2)
    }
}

fn fib(mut cx: FunctionContext) -> JsResult<JsNumber> {
    let n = cx.argument::<JsNumber>(0)?.value() as i64;
    Ok(cx.number(fibonacci(n) as f64))
}

register_module!(mut cx, {
    cx.export_function("fibonacci", fib)
});