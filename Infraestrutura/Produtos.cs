using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;

namespace Infraestrutura
{
    public class Produtos
    {
        private ConnectedMysql connected;


        /*Metodo para cadastrar produtos novos*/
        public void AddProdutos(int codigo,string nome,string tipo,double quantidadeUN,double valorUN,int porcetagem,double valorFinal,DateTime dataValidade)
        {
            
            string comando = $"use fitz;insert into produtos value ({codigo},{nome},{tipo},{quantidadeUN},{valorUN}`,{porcetagem},{valorFinal},{dataValidade});";
            ConnectedMysql connected = new ConnectedMysql();
            var banco = connected.Open();
            MySqlCommand cmd = new MySqlCommand(comando, banco);
            cmd.ExecuteReader();
        }
    }
}
