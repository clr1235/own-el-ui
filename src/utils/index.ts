// 驼峰转为中划线
export const getKebabCase = (str: string) => {
    return str.replace(/[A-Z]/g, (i) => "-" + i.toLocaleLowerCase())
}
// 中划线转为驼峰
export const getCamelCase = (str: string) => {
    return str.replace(/-([a-z])/g, (i) => i.toUpperCase())
}