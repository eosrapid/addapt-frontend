export const EXAMPLE_CONTRACT_CPP = `#include <example_contract.hpp>


ACTION example_contract::add(uint64_t category, std::string content) {
  require_auth(BLOG_ADMIN);
  uint64_t new_pid = tbl_posts.available_primary_key();
  tbl_posts.emplace(_self, [&]( auto& p ) {
    p.pid = new_pid;
    p.category = category;
    p.content = content;
  });
}
ACTION example_contract::edit(uint64_t pid, std::string content) {
  require_auth(BLOG_ADMIN);
  auto itr = tbl_posts.find(pid);
  check( itr != tbl_posts.end(), "table val not set" );
  tbl_posts.modify( itr, _self, [&]( auto& row ) {
    row.content = content;
  });
}`;

export const EXAMPLE_CONTRACT_HPP = `#include <eosio/eosio.hpp>
#define BLOG_ADMIN "adminusrname"_n
using namespace eosio;

CONTRACT example_contract : public contract {
   public:
      using contract::contract;
      example_contract( name receiver, name code, datastream<const char*> ds )
         : contract(receiver, code, ds), tbl_posts(receiver, receiver.value) {}

      ACTION add(uint64_t category, std::string content);
      ACTION edit(uint64_t pid, std::string content);

      TABLE s_tbl_posts {
         uint64_t pid;
         uint64_t category;
         std::string content;
         uint64_t primary_key()const { return pid; }
         uint64_t by_secondary()const { return category; }
      };

      typedef eosio::multi_index<"posts"_n, s_tbl_posts, eosio::indexed_by<"secid"_n, eosio::const_mem_fun<s_tbl_posts, uint64_t, &s_tbl_posts::by_secondary>>> t_tbl_posts;

      using add_action = action_wrapper<"add"_n, &example_contract::add>;
      using edit_action = action_wrapper<"edit"_n, &example_contract::edit>;
      t_tbl_posts tbl_posts;
};`;
