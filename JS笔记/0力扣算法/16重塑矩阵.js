/*
在 MATLAB 中，有一个非常有用的函数 reshape ，它可以将一个 m x n 矩阵重塑为另一个大小不同（r x c）的新矩阵，但保留其原始数据。

给你一个由二维数组 mat 表示的 m x n 矩阵，以及两个正整数 r 和 c ，分别表示想要的重构的矩阵的行数和列数。

重构后的矩阵需要将原始矩阵的所有元素以相同的 行遍历顺序 填充。

如果具有给定参数的 reshape 操作是可行且合理的，则输出新的重塑矩阵；否则，输出原始矩阵。

 

示例 1：


输入：mat = [[1,2],[3,4]], r = 1, c = 4
输出：[[1,2,3,4]]
示例 2：


输入：mat = [[1,2],[3,4]], r = 2, c = 4
输出：[[1,2],[3,4]]
*/
var matrixReshape = function(mat, r, c) {
    if(r * c < mat[0].length * mat.length) {
        return mat
    }
    if(r === mat[0].length || c === mat.length) {
        return mat
    }
    else {
        const temp = []
        for(let i = 0; i < mat[0].length; i++) {
            for(let k = 0; k < mat.length; k++) {

            }
        }
    }
};