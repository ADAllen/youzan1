let url={
    hotLists:'/index/hotLists',
    banner:'/index/banner',
    topList:'/category/topList',
    subList:'/category/subList',
    rank:'/category/rank',
    searchList:'/search/list',
    details:'/goods/details',
    deal:'/goods/deal',
    addCart:'/cart/add',
    cartAdd:'.cart/add',
    cartLists:'/cart/list',
    cartReduce:'/cart/reduce',
    cartRemove:'/cart/remove',
    cartMremove:'cart/mremove'
    

 }
//  开发环境和实际化境切换
// let host=""
let host='http://rap2api.taobao.org/app/mock/7058'

for (let key in url) {
    if (url.hasOwnProperty(key)) {
         url[key]=host+url[key];
        
    }
}
export default url 