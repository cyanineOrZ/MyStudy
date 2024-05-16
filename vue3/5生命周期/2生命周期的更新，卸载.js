/改动二、销毁变为卸载 Destory ——> Unmounted/

/**
 * 5、BeforeUpdate 未更新
 * 
 * 执行diff算法，依据key或者其他及进行虚拟DOM的检查
 */

/**
 * 6、Updated 已更新
 * 
 * 根据虚拟DOM生成真实DOM，并将真实DOM替换为更新后的DOM，
 */

/**
 * 7、BeforeUnmount 未卸载
 * 
 * 清理Vue或其他组件之间的联系，比如props，自定义事件等
 * 
 * 此时真实DOM并未被销毁，操作仍有效果
 */

/**
 * 8、Unmouted 已卸载
 * 
 * Vue实例或者组件将会被销毁，无法再操作DOM
 */