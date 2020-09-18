package com.manager;

import org.task.Page1;
import org.task.Page2;
import org.task.Page3;
import org.task.Page4;
import org.task.Page5;

public class PageObjectManager {
	private static PageObjectManager pageObjectManager;
	private Page1 page1;
	private Page2 page2;
	private Page3 page3;
	private Page4 page4;
	private Page5 page5;
	
	public PageObjectManager() {
		
	}
	
	public static PageObjectManager getInstance() {
		if (pageObjectManager==null) {
			pageObjectManager=new PageObjectManager();
		}
		return pageObjectManager;

	}
	
	
	public Page1 getPage1() {
		return (page1==null)?page1=new Page1():page1 ;
	}
	public Page2 getPage2() {
		return (page2==null)?page2=new Page2():page2;
	}
	public Page3 getPage3() {
		return (page3==null)?page3=new Page3():page3;
	}
	public Page4 getPage4() {
		return (page4==null)?page4=new Page4():page4;
	}
	public Page5 getPage5() {
		return (page5==null)?page5=new Page5():page5;
	}
	

}
