// just a static class that makes our code easier to read. it just returns strings that we might need.
class View {
    static BLANK() {
        return ''
    }
    static SPACE() {
        return '&nbsp;'
    }
    static TAB() {
        return '&nbsp;&nbsp;&nbsp;&nbsp;'
    }
    static NEWLINE() {
        return '<br>'
    }
    static clr() {
        document.body.style.fontFamily = 'Arial'
        document.body.innerHTML = ''
    }
    static out(newText) {
        document.body.innerHTML += newText
    }
    static add(newText) {
        document.body.innerHTML += '<br>' + newText
    }
}