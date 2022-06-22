using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Infraestrutura.Model;
using MySql.Data.MySqlClient;

namespace Infraestrutura
{
    public class SalvarProduto
    {
        private ConnectedMysql connected;


        /*Metodo para cadastrar produtos novos*/
        public void AddProdutos(ProdutoModel produto)
        {
            
            string comando = $"use fitz;insert into produtos value (" +
                $"{produto.Codigo}," +
                $"{produto.Nome}," +
                $"{produto.QuantidadeUN}," +
                $"{produto.ValorUnitatiro}," +
                $"{produto.Porcetagem}," +
                $"{produto.ValorFinal}," +
                $"{DateTime.Now});";
            ConnectedMysql connected = new ConnectedMysql();
            var banco = connected.Open();
            MySqlCommand cmd = new MySqlCommand(comando, banco);
            cmd.ExecuteReader();
        }
    }
}
