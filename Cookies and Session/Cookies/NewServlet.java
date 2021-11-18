/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.*;
import javax.servlet.http.Cookie;
/**
 *
 * @author gowrish
 */
public class NewServlet extends HttpServlet {
    private final Map books = new HashMap();
    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    public void init()
    {
        books.put("LetusC", "112233");
        books.put("MasteringC++","113322");
        books.put("IntroductiontoDatabases","113311");
        books.put("NetworkProgramming","112244");
        books.put("Javacomplete","187829");
    }
    
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException 
    {
        String lang = request.getParameter("booktitle");
        //System.out.println("Got the parameter: " + lang);
        String isbn = books.get(lang).toString();
        //System.out.println("Got the value from hashmap: " + isbn);
        Cookie ck = new Cookie(lang,isbn);
        ck.setMaxAge(60*60);
        response.addCookie(ck);
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
            
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title> Welcome to Cookies </title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<p><a href = " + "\"ckselectlanguage.html\">");
            out.println("Click here to add more items</a></p>");
            out.println("<p><a href = \"NewServlet\">" + "Click to view items in shopping cart</a></p>");
            //out.println("<h1>Servlet NewServlet2 at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");        
    }
    
    
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
       Cookie cks[] = request.getCookies();
       response.setContentType("text/html");
       PrintWriter out = response.getWriter();
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title> Welcome to Cookies </title>");   
            out.println("<style> p { font-size: 20px; } </style>");
            out.println("</head>");
            out.println("<body>");
            if(cks != null && cks.length != 0)
            {
                out.println("<h1>Shopping cart</h1>");                
                out.println("<p>");
                for(int i=0;i<cks.length;i++)
                    out.println(cks[i].getName() + " --- " + cks[i].getValue() + "<br/>");
                out.println("</p>");
            }
            else
            {
                out.println("<h1>No Items in Cart</h1>");
                out.println("<p>You haven't added books </p>");
            }
            out.println("</body>");
            out.println("</html>");        
    
    }

    

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
