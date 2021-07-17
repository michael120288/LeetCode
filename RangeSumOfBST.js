/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let totalSum = 0

    function dfs(node){
        if(!node){
            return;
        }
        if(node.val >= L && node.val <= R){
            totalSum += node.val
        }
        if(L < node.val){
            dfs(node.left)
        }
        if(R > node.val){
            dfs(node.right)
        }
    }

    dfs(root)
    return totalSum
};